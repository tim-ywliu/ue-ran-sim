package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;

public class NGAP_PrivateMessage extends NGAP_BaseMessage {

    public NGAP_PrivateMessage() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.PrivateMessage;
    }

    @Override
    public int getCriticality() {
        return 1;
    }

    @Override
    public int getProcedureCode() {
        return 31;
    }

    @Override
    public int getPduType() {
        return 0;
    }

    @Override
    public int[] getIeId() {
        return new int[]{};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{};
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
        return "PrivateMessage";
    }

    @Override
    public String getXmlTagName() {
        return "PrivateMessage";
    }

}
