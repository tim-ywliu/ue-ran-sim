/*
 * MIT License
 *
 * Copyright (c) 2020 ALİ GÜNGÖR
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author Ali Güngör (aligng1620@gmail.com)
 */

package tr.havelsan.ueransim.sctp;

import com.sun.nio.sctp.MessageInfo;
import com.sun.nio.sctp.SctpChannel;
import tr.havelsan.ueransim.utils.Logging;
import tr.havelsan.ueransim.utils.Tag;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;

public class SctpClient implements ISctpClient {
    private static final int RECEIVER_BUFFER_SIZE = 64000;

    private final String host;
    private final int port;
    private final int protocolId;
    private final SctpNotificationHandler associationHandler;

    private SctpChannel channel;
    private boolean receiving;

    public SctpClient(String host, int port, int protocolId, ISctpAssociationHandler sctpAssociationHandler) {
        this.host = host;
        this.port = port;
        this.protocolId = protocolId;
        this.associationHandler = new SctpNotificationHandler(sctpAssociationHandler);
    }

    @Override
    public void start() throws Exception {
        if (this.channel != null) throw new RuntimeException("start was already called");

        Logging.info(Tag.CONNECTION, "Trying to establish SCTP connection... (%s:%s)", host, port);

        var serverAddress = new InetSocketAddress(host, port);
        this.channel = SctpChannel.open(serverAddress, 0, 0);
        this.receiving = true;

        Logging.info(Tag.CONNECTION, "SCTP connection established");
    }

    @Override
    public void send(int streamNumber, byte[] data) {
        ByteBuffer outgoingBuffer = ByteBuffer.wrap(data);
        MessageInfo outgoingMessage = MessageInfo.createOutgoing(null, streamNumber);
        outgoingMessage.payloadProtocolID(protocolId);
        try {
            channel.send(outgoingBuffer, outgoingMessage);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void receiverLoop(ISctpHandler handler) throws Exception {
        receiving = true;

        MessageInfo messageInfo;
        while (receiving && channel.isOpen()) {
            ByteBuffer incomingBuffer = ByteBuffer.allocate(RECEIVER_BUFFER_SIZE);
            messageInfo = channel.receive(incomingBuffer, System.out, associationHandler);
            if (messageInfo == null || messageInfo.bytes() == -1) break;

            byte[] receivedBytes = new byte[messageInfo.bytes()];
            for (int i = 0; i < receivedBytes.length; i++) {
                receivedBytes[i] = incomingBuffer.get(i);
            }
            handler.handleSCTPMessage(receivedBytes);
        }
    }

    @Override
    public void close() {
        try {
            channel.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void abortReceiver() {
        receiving = false;
    }

    @Override
    public boolean isOpen() {
        return channel.isOpen();
    }
}
