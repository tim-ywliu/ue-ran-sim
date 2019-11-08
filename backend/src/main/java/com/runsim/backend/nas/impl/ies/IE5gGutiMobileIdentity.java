package com.runsim.backend.nas.impl.ies;

import com.runsim.backend.exceptions.EncodingException;
import com.runsim.backend.nas.NasDecoder;
import com.runsim.backend.nas.NasEncoder;
import com.runsim.backend.nas.impl.enums.EMobileCountryCode;
import com.runsim.backend.nas.impl.enums.EMobileNetworkCode;
import com.runsim.backend.nas.impl.enums.EMobileNetworkCode2;
import com.runsim.backend.nas.impl.enums.EMobileNetworkCode3;
import com.runsim.backend.nas.impl.values.V5gTmsi;
import com.runsim.backend.nas.impl.values.VAmfSetId;
import com.runsim.backend.utils.OctetInputStream;
import com.runsim.backend.utils.OctetOutputStream;
import com.runsim.backend.utils.bits.Bit6;
import com.runsim.backend.utils.octets.Octet;

public class IE5gGutiMobileIdentity extends IE5gsMobileIdentity {

    public EMobileCountryCode mobileCountryCode;
    public EMobileNetworkCode mobileNetworkCode;
    public Octet amfRegionId;
    public VAmfSetId amfSetId;
    public Bit6 amfPointer;
    public V5gTmsi tmsi;

    @Override
    public IE5gsMobileIdentity decodeMobileIdentity(OctetInputStream stream, int length, boolean isEven) {
        stream.readOctet();

        var result = new IE5gGutiMobileIdentity();

        /* Decode MCC */
        int octet1 = stream.readOctetI();
        int mcc1 = octet1 & 0b1111;
        int mcc2 = (octet1 >> 4) & 0b1111;
        int octet2 = stream.readOctetI();
        int mcc3 = octet2 & 0b1111;
        int mcc = 100 * mcc1 + 10 * mcc2 + mcc3;
        result.mobileCountryCode = EMobileCountryCode.fromValue(mcc);

        /* Decode MNC */
        int mnc3 = (octet2 >> 4) & 0b1111;
        int octet3 = stream.readOctetI();
        int mnc2 = octet3 & 0b1111;
        int mnc1 = (octet3 >> 4) & 0b1111;
        int mnc = 10 * mnc1 + mnc2;
        boolean longMnc = false;
        if ((mnc3 != 0xf) || (octet1 == 0xff && octet2 == 0xff && octet3 == 0xff)) {
            longMnc = true;
            mnc = 10 * mnc + mnc3;
        }
        if (longMnc) {
            result.mobileNetworkCode = EMobileNetworkCode3.fromValue(mcc * 1000 + mnc);
        } else {
            result.mobileNetworkCode = EMobileNetworkCode2.fromValue(mcc * 100 + mnc);
        }

        /* Decode others */
        result.amfRegionId = stream.readOctet();
        result.amfSetId = NasDecoder.nasValue(stream, VAmfSetId.class);
        result.amfPointer = new Bit6(stream.readOctetI());
        result.tmsi = NasDecoder.nasValue(stream, V5gTmsi.class);

        return result;
    }


    @Override
    public void encodeIE6(OctetOutputStream stream) {
        stream.writeOctet(0xf2); // Flags for 5G-GUTI

        /* Encode MCC and MNC*/
        int mcc = mobileCountryCode.value;
        int mcc3 = mcc % 10;
        int mcc2 = (mcc % 100) / 10;
        int mcc1 = (mcc % 1000) / 100;
        int octet1 = mcc2 << 4 | mcc1;

        boolean longMnc;
        int mnc;

        if (mobileNetworkCode == null)
            throw new EncodingException("mnc is null");
        if (mobileNetworkCode instanceof EMobileNetworkCode2) {
            longMnc = false;
            mnc = mobileCountryCode.value % 100;
        } else {
            longMnc = true;
            mnc = mobileCountryCode.value % 1000;
        }

        int mnc1 = longMnc ? (mnc % 1000) / 100 : (mnc % 100) / 10;
        int mnc2 = longMnc ? (mnc % 100) / 10 : (mnc % 10);
        int mnc3 = longMnc ? (mnc % 10) : 0xF;

        int octet2 = mnc3 << 4 | mcc3;
        int octet3 = mnc1 << 4 | mnc2;

        stream.writeOctet(octet1);
        stream.writeOctet(octet2);
        stream.writeOctet(octet3);

        /* Encode region id */
        stream.writeOctet(amfRegionId);

        /* Encode AMF set id and AMF pointer */
        var str = new OctetOutputStream();
        NasEncoder.nasValue(str, amfSetId);
        var bytes = str.toOctetArray();
        bytes[1] = new Octet((bytes[1].intValue() << 6) | amfPointer.intValue());
        stream.writeOctets(bytes);

        /* Encode TMSI */
        NasEncoder.nasValue(stream, tmsi);
    }

}