package tr.havelsan.ueransim.ngap0.ies.bit_strings;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.utils.bits.*;
import tr.havelsan.ueransim.utils.octets.*;

public class NGAP_EUTRAintegrityProtectionAlgorithms extends NGAP_BitString {

    public NGAP_EUTRAintegrityProtectionAlgorithms(BitString value) {
        super(value);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(OctetString octetString, int bitLength) {
        super(octetString, bitLength);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(OctetString octetString) {
        super(octetString);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(Octet[] octets, int bitLength) {
        super(octets, bitLength);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(Octet[] octets) {
        super(octets);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(byte[] octets, int bitLength) {
        super(octets, bitLength);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(byte[] octets) {
        super(octets);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(String hex, int bitLength) {
        super(hex, bitLength);
    }

    public NGAP_EUTRAintegrityProtectionAlgorithms(String bits) {
        super(bits);
    }

    @Override
    public String getAsnName() {
        return "EUTRAintegrityProtectionAlgorithms";
    }

    @Override
    public String getXmlTagName() {
        return "EUTRAintegrityProtectionAlgorithms";
    }
}
