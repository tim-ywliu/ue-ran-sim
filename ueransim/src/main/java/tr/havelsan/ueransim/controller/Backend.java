package tr.havelsan.ueransim.controller;


import io.javalin.Javalin;
import io.javalin.websocket.*;
import org.jetbrains.annotations.NotNull;
import tr.havelsan.ueransim.Program;
import tr.havelsan.ueransim.events.EventParser;
import tr.havelsan.ueransim.utils.*;


import java.util.ArrayList;
import java.util.List;

public class Backend {

    public static void main(String[] args) {

        var handler = new Handler();

        Javalin.create().start(7070).ws("/demo", ws -> {

            ws.onConnect(handler);

            ws.onMessage(handler);

        });

        new Thread(() -> Program.main(args)).start();

    }

    static class Handler implements WsMessageHandler, WsConnectHandler {

        List<LogEntry> logEntries = new ArrayList<>();

        public Handler() {
            Logging.addLogHandler(h -> logEntries.add(h));
        }

        @Override
        public void handleMessage(@NotNull WsMessageContext ctx) {


            for (var s : logEntries) {
                ctx.send(new Wrapper("log", s));

            }

            logEntries.clear();

        }

        @Override
        public void handleConnect(@NotNull WsConnectContext ctx) {
            ctx.send(new Wrapper("possibleEvents", EventParser.possibleEvents()));
        }
    }

}






