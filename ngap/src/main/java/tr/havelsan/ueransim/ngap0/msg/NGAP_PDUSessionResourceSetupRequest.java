package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.sequence_ofs.*;
import tr.havelsan.ueransim.ngap0.ies.octet_strings.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;

public class NGAP_PDUSessionResourceSetupRequest extends NGAP_BaseMessage {

    public NGAP_PDUSessionResourceSetupRequest() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.PDUSessionResourceSetupRequest;
    }

    @Override
    public int getCriticality() {
        return 0;
    }

    @Override
    public int getProcedureCode() {
        return 29;
    }

    @Override
    public int getPduType() {
        return 0;
    }

    @Override
    public int[] getIeId() {
        return new int[]{10, 85, 83, 38, 74};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{0, 0, 1, 0, 0};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{NGAP_AMF_UE_NGAP_ID.class, NGAP_RAN_UE_NGAP_ID.class, NGAP_RANPagingPriority.class, NGAP_NAS_PDU.class, NGAP_PDUSessionResourceSetupListSUReq.class};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{2, 2, 0, 0, 2};
    }

    @Override
    public String[] getMemberIdentifiers() {
        return new String[]{"protocolIEs"};
    }

    @Override
    public String[] getMemberNames() {
        return new String[]{"protocolIEs"};
    }

    @Override
    public String getAsnName() {
        return "PDUSessionResourceSetupRequest";
    }

    @Override
    public String getXmlTagName() {
        return "PDUSessionResourceSetupRequest";
    }

}
