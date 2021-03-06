package tr.havelsan.ueransim.ngap0.ies.sequences;

import tr.havelsan.ueransim.ngap0.core.*;
import tr.havelsan.ueransim.ngap0.ies.octet_strings.*;
import tr.havelsan.ueransim.ngap0.ies.sequence_ofs.*;
import tr.havelsan.ueransim.ngap0.ies.choices.*;
import tr.havelsan.ueransim.ngap0.ies.integers.*;

public class NGAP_SourceNGRANNode_ToTargetNGRANNode_TransparentContainer extends NGAP_Sequence {

    public NGAP_RRCContainer rRCContainer;
    public NGAP_PDUSessionResourceInformationList pDUSessionResourceInformationList;
    public NGAP_E_RABInformationList e_RABInformationList;
    public NGAP_NGRAN_CGI targetCell_ID;
    public NGAP_IndexToRFSP indexToRFSP;
    public NGAP_UEHistoryInformation uEHistoryInformation;

    @Override
    public String getAsnName() {
        return "SourceNGRANNode-ToTargetNGRANNode-TransparentContainer";
    }

    @Override
    public String getXmlTagName() {
        return "SourceNGRANNode-ToTargetNGRANNode-TransparentContainer";
    }

    @Override
    public String[] getMemberNames() {
        return new String[]{"rRCContainer", "pDUSessionResourceInformationList", "e-RABInformationList", "targetCell-ID", "indexToRFSP", "uEHistoryInformation"};
    }

    @Override
    public String[] getMemberIdentifiers() {
        return new String[]{"rRCContainer", "pDUSessionResourceInformationList", "e_RABInformationList", "targetCell_ID", "indexToRFSP", "uEHistoryInformation"};
    }
}
