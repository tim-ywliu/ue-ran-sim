package tr.havelsan.ueransim.ngap0.msg;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.NgapMessageType;
import tr.havelsan.ueransim.ngap0.ies.sequence_ofs.*;
import tr.havelsan.ueransim.ngap0.ies.sequences.*;
import tr.havelsan.ueransim.ngap0.ies.printable_strings.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;

public class NGAP_NGSetupResponse extends NGAP_BaseMessage {

    public NGAP_NGSetupResponse() {

    }

    @Override
    public NgapMessageType getMessageType() {
        return NgapMessageType.NGSetupResponse;
    }

    @Override
    public int getCriticality() {
        return 0;
    }

    @Override
    public int getProcedureCode() {
        return 21;
    }

    @Override
    public int getPduType() {
        return 1;
    }

    @Override
    public int[] getIeId() {
        return new int[]{1, 96, 86, 80, 19};
    }

    @Override
    public int[] getIeCriticality() {
        return new int[]{0, 0, 1, 0, 1};
    }

    @Override
    public Class<? extends NGAP_Value>[] getIeTypes() {
        return new Class[]{NGAP_AMFName.class, NGAP_ServedGUAMIList.class, NGAP_RelativeAMFCapacity.class, NGAP_PLMNSupportList.class, NGAP_CriticalityDiagnostics.class};
    }

    @Override
    public int[] getIePresence() {
        return new int[]{2, 2, 2, 2, 0};
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
        return "NGSetupResponse";
    }

    @Override
    public String getXmlTagName() {
        return "NGSetupResponse";
    }

}
