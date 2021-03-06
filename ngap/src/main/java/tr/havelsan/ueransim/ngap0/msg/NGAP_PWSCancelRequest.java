package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.choices.*;
import tr.havelsan.ueransim.ngap0.ies.bit_strings.*;
import tr.havelsan.ueransim.ngap0.ies.enumerations.*;

public class NGAP_PWSCancelRequest extends NGAP_BaseMessage {

    public NGAP_PWSCancelRequest() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.PWSCancelRequest;
    }

    @Override
    public int getCriticality() {
        return 0;
    }

    @Override
    public int getProcedureCode() {
        return 32;
    }

    @Override
    public int getPduType() {
        return 0;
    }

    @Override
    public int[] getIeId() {
        return new int[]{35, 95, 122, 14};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{0, 0, 1, 0};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{NGAP_MessageIdentifier.class, NGAP_SerialNumber.class, NGAP_WarningAreaList.class, NGAP_CancelAllWarningMessages.class};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{2, 2, 0, 0};
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
        return "PWSCancelRequest";
    }

    @Override
    public String getXmlTagName() {
        return "PWSCancelRequest";
    }

}
