package tr.havelsan.ueransim.ngap0.ies.sequences;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.sequence_ofs.*;
import tr.havelsan.ueransim.ngap0.ies.choices.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;

public class NGAP_OverloadStartNSSAIItem extends NGAP_Sequence {

    public NGAP_SliceOverloadList sliceOverloadList;
    public NGAP_OverloadResponse sliceOverloadResponse;
    public NGAP_TrafficLoadReductionIndication sliceTrafficLoadReductionIndication;

    @Override
    public String getAsnName() {
        return "OverloadStartNSSAIItem";
    }

    @Override
    public String getXmlTagName() {
        return "OverloadStartNSSAIItem";
    }

    @Override
    public String[] getMemberNames() {
        return new String[]{"sliceOverloadList", "sliceOverloadResponse", "sliceTrafficLoadReductionIndication"};
    }

    @Override
    public String[] getMemberIdentifiers() {
        return new String[]{"sliceOverloadList", "sliceOverloadResponse", "sliceTrafficLoadReductionIndication"};
    }
}
