package com.runsim.backend.nas.impl.messages;

import com.runsim.backend.nas.core.IMessageBuilder;
import com.runsim.backend.nas.core.messages.PlainMmMessage;
import com.runsim.backend.nas.impl.ies.IE5gMmCause;
import com.runsim.backend.nas.impl.ies.IEDeRegistrationType;
import com.runsim.backend.nas.impl.ies.IEGprsTimer2;

public class DeRegistrationRequestUeTerminated extends PlainMmMessage {
    public IEDeRegistrationType deRegistrationType;
    public IE5gMmCause mmCause;
    public IEGprsTimer2 t3346Value;

    @Override
    public void build(IMessageBuilder builder) {
        super.build(builder);

        builder.mandatoryIE1("deRegistrationType");
        builder.optionalIE(0x58, "mmCause");
        builder.optionalIE(0x5F, "t3346Value");
    }
}