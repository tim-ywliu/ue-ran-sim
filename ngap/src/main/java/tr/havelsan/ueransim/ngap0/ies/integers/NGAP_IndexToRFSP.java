package tr.havelsan.ueransim.ngap0.ies.integers;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.utils.octets.*;

public class NGAP_IndexToRFSP extends NGAP_Integer {

    public NGAP_IndexToRFSP(long value) {
        super(value);
    }

    public NGAP_IndexToRFSP(Octet value) {
        super(value);
    }

    public NGAP_IndexToRFSP(Octet2 value) {
        super(value);
    }

    public NGAP_IndexToRFSP(Octet3 value) {
        super(value);
    }

    public NGAP_IndexToRFSP(Octet4 value) {
        super(value);
    }

    @Override
    public String getAsnName() {
        return "IndexToRFSP";
    }

    @Override
    public String getXmlTagName() {
        return "IndexToRFSP";
    }
}
