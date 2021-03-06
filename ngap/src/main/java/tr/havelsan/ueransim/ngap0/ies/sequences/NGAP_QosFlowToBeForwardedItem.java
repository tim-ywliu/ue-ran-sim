package tr.havelsan.ueransim.ngap0.ies.sequences;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;

public class NGAP_QosFlowToBeForwardedItem extends NGAP_Sequence {

    public NGAP_QosFlowIdentifier qosFlowIdentifier;

    @Override
    public String getAsnName() {
        return "QosFlowToBeForwardedItem";
    }

    @Override
    public String getXmlTagName() {
        return "QosFlowToBeForwardedItem";
    }

    @Override
    public String[] getMemberNames() {
        return new String[]{"qosFlowIdentifier"};
    }

    @Override
    public String[] getMemberIdentifiers() {
        return new String[]{"qosFlowIdentifier"};
    }
}
