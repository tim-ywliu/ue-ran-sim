package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.sequences.*;
import tr.havelsan.ueransim.ngap0.ies.choices.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;
import tr.havelsan.ueransim.ngap0.ies.enumerations.*;

public class NGAP_UEContextModificationResponse extends NGAP_BaseMessage {

    public NGAP_UEContextModificationResponse() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.UEContextModificationResponse;
    }

    @Override
    public int getCriticality() {
        return 0;
    }

    @Override
    public int getProcedureCode() {
        return 40;
    }

    @Override
    public int getPduType() {
        return 1;
    }

    @Override
    public int[] getIeId() {
        return new int[]{10, 85, 92, 121, 19};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{1, 1, 1, 1, 1};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{NGAP_AMF_UE_NGAP_ID.class, NGAP_RAN_UE_NGAP_ID.class, NGAP_RRCState.class, NGAP_UserLocationInformation.class, NGAP_CriticalityDiagnostics.class};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{2, 2, 0, 0, 0};
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
        return "UEContextModificationResponse";
    }

    @Override
    public String getXmlTagName() {
        return "UEContextModificationResponse";
    }

}
