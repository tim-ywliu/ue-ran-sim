package tr.havelsan.ueransim.ngap0.ies.sequences;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.octet_strings.*;
import tr.havelsan.ueransim.ngap0.ies.choices.*;

public class NGAP_GlobalGNB_ID extends NGAP_Sequence {

    public NGAP_PLMNIdentity pLMNIdentity;
    public NGAP_GNB_ID gNB_ID;

    @Override
    public String getAsnName() {
        return "GlobalGNB-ID";
    }

    @Override
    public String getXmlTagName() {
        return "GlobalGNB-ID";
    }

    @Override
    public String[] getMemberNames() {
        return new String[]{"pLMNIdentity", "gNB-ID"};
    }

    @Override
    public String[] getMemberIdentifiers() {
        return new String[]{"pLMNIdentity", "gNB_ID"};
    }
}
