package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.sequence_ofs.*;
import tr.havelsan.ueransim.ngap0.ies.printable_strings.*;
import tr.havelsan.ueransim.ngap0.ies.enumerations.*;

public class NGAP_RANConfigurationUpdate extends NGAP_BaseMessage {

    public NGAP_RANConfigurationUpdate() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.RANConfigurationUpdate;
    }

    @Override
    public int getCriticality() {
        return 0;
    }

    @Override
    public int getProcedureCode() {
        return 35;
    }

    @Override
    public int getPduType() {
        return 0;
    }

    @Override
    public int[] getIeId() {
        return new int[]{82, 102, 21};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{1, 0, 1};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{NGAP_RANNodeName.class, NGAP_SupportedTAList.class, NGAP_PagingDRX.class};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{0, 0, 0};
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
        return "RANConfigurationUpdate";
    }

    @Override
    public String getXmlTagName() {
        return "RANConfigurationUpdate";
    }

}
