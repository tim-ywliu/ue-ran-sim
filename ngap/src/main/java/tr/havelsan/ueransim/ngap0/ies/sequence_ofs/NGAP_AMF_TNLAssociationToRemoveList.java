package tr.havelsan.ueransim.ngap0.ies.sequence_ofs;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.sequences.*;

import java.util.List;

public class NGAP_AMF_TNLAssociationToRemoveList extends NGAP_SequenceOf<NGAP_AMF_TNLAssociationToRemoveItem> {

    public NGAP_AMF_TNLAssociationToRemoveList() {
        super();
    }

    public NGAP_AMF_TNLAssociationToRemoveList(List<NGAP_AMF_TNLAssociationToRemoveItem> value) {
        super(value);
    }

    @Override
    public String getAsnName() {
        return "AMF-TNLAssociationToRemoveList";
    }

    @Override
    public String getXmlTagName() {
        return "AMF-TNLAssociationToRemoveList";
    }

    @Override
    public Class<NGAP_AMF_TNLAssociationToRemoveItem> getItemType() {
        return NGAP_AMF_TNLAssociationToRemoveItem.class;
    }
}
