/*
 * MIT License
 *
 * Copyright (c) 2020 ALİ GÜNGÖR
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author Ali Güngör (aligng1620@gmail.com)
 */

package tr.havelsan.ueransim.ngap0.core;

import tr.havelsan.ueransim.nas.NasDecoder;
import tr.havelsan.ueransim.nas.core.messages.NasMessage;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.enumerations.NGAP_Criticality;
import tr.havelsan.ueransim.ngap0.ies.integers.NGAP_ProcedureCode;
import tr.havelsan.ueransim.ngap0.ies.integers.NGAP_ProtocolIE_ID;
import tr.havelsan.ueransim.ngap0.ies.integers.NGAP_RAN_UE_NGAP_ID;
import tr.havelsan.ueransim.ngap0.ies.octet_strings.NGAP_NAS_PDU;
import tr.havelsan.ueransim.ngap0.pdu.*;

import java.util.Comparator;

public abstract class NGAP_BaseMessage extends NGAP_Sequence {

    public NGAP_ProtocolIEContainer protocolIEs;

    public abstract int getPduType();

    public abstract int getCriticality();

    public abstract int getProcedureCode();

    public abstract int[] getIeId();

    public abstract int[] getIeCriticality();

    public abstract Class<? extends NGAP_Value>[] getIeTypes();

    public abstract int[] getIePresence();

    public abstract NgapMessageType getMessageType();

    private int indexOfIeType(Class<? extends NGAP_Value> type) {
        int i = 0;
        for (var item : getIeTypes()) {
            if (item == type) return i;
            i++;
        }
        return -1;
    }

    private void sortProtocolIes() {
        protocolIEs.list.sort(Comparator.comparingInt(ie -> indexOfIeType(ie.value.getPresentValue().getClass())));
    }

    public void addProtocolIe(NGAP_Value ie) {
        if (protocolIEs == null) protocolIEs = new NGAP_ProtocolIEContainer();

        int ind = indexOfIeType(ie.getClass());
        if (ind == -1) {
            throw new RuntimeException("IE is not usable for NGAP message type.");
        }

        if (isProtocolIeUsable(ie.getClass())) {
            var crt = getIeCriticality()[ind];

            var protocolIe = new NGAP_ProtocolIE(getMessageType());
            protocolIe.id = new NGAP_ProtocolIE_ID(getIeId()[ind]);
            protocolIe.criticality = crt == 0 ? NGAP_Criticality.REJECT : crt == 1 ? NGAP_Criticality.IGNORE : NGAP_Criticality.NOTIFY;
            protocolIe.value = new NGAP_IEChoice();
            protocolIe.value.setPresentValue(ie);

            protocolIEs.list.add(protocolIe);
        }

        sortProtocolIes();
    }

    public <T extends NGAP_Value> T getProtocolIe(Class<T> type, int occurrenceIndex) {
        if (protocolIEs == null) protocolIEs = new NGAP_ProtocolIEContainer();

        int occurrence = -1;
        for (var item : protocolIEs.list) {
            var pres = item.value.getPresentValue();
            if (type == pres.getClass()) {
                occurrence++;
                if (occurrence == occurrenceIndex)
                    return (T) pres;
            }
        }
        return null;
    }

    public <T extends NGAP_Value> T getProtocolIe(Class<T> type) {
        return getProtocolIe(type, 0);
    }

    public NasMessage getNasMessage() {
        var ie = getProtocolIe(NGAP_NAS_PDU.class);
        if (ie == null) return null;
        return NasDecoder.nasPdu(ie.value);
    }

    public boolean isProtocolIeUsable(Class<? extends NGAP_Value> type) {
        return indexOfIeType(type) != -1;
    }

    public boolean isUeAssociated() {
        return getProtocolIe(NGAP_RAN_UE_NGAP_ID.class) != null;
    }

    public NGAP_PDU buildPdu() {
        var pdu = new NGAP_PDU();

        var crit = getCriticality();
        var criticality = crit == 0 ? NGAP_Criticality.REJECT : crit == 1 ? NGAP_Criticality.IGNORE : NGAP_Criticality.NOTIFY;

        switch (this.getPduType()) {
            case 0: {
                pdu.initiatingMessage = new NGAP_InitiatingMessage();
                pdu.initiatingMessage.procedureCode = new NGAP_ProcedureCode(getProcedureCode());
                pdu.initiatingMessage.criticality = criticality;
                pdu.initiatingMessage.value = new NGAP_MessageChoice();
                pdu.initiatingMessage.value.setPresentValue(this);
                break;
            }
            case 1: {
                pdu.successfulOutcome = new NGAP_SuccessfulOutcome();
                pdu.successfulOutcome.procedureCode = new NGAP_ProcedureCode(getProcedureCode());
                pdu.successfulOutcome.criticality = criticality;
                pdu.successfulOutcome.value = new NGAP_MessageChoice();
                pdu.successfulOutcome.value.setPresentValue(this);
                break;
            }
            case 2: {
                pdu.unsuccessfulOutcome = new NGAP_UnsuccessfulOutcome();
                pdu.unsuccessfulOutcome.procedureCode = new NGAP_ProcedureCode(getProcedureCode());
                pdu.unsuccessfulOutcome.criticality = criticality;
                pdu.unsuccessfulOutcome.value = new NGAP_MessageChoice();
                pdu.unsuccessfulOutcome.value.setPresentValue(this);
                break;
            }
        }

        return pdu;
    }
}
