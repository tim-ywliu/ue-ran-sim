package tr.havelsan.ueransim.ngap0.ies.sequence_ofs;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.sequences.*;

import java.util.List;

public class NGAP_NR_CGIListForWarning extends NGAP_SequenceOf<NGAP_NR_CGI> {

    public NGAP_NR_CGIListForWarning() {
        super();
    }

    public NGAP_NR_CGIListForWarning(List<NGAP_NR_CGI> value) {
        super(value);
    }

    @Override
    public String getAsnName() {
        return "NR-CGIListForWarning";
    }

    @Override
    public String getXmlTagName() {
        return "NR-CGIListForWarning";
    }

    @Override
    public Class<NGAP_NR_CGI> getItemType() {
        return NGAP_NR_CGI.class;
    }
}
