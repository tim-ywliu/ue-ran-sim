package tr.havelsan.ueransim.controller;


import io.javalin.Javalin;
import io.javalin.websocket.WsConnectContext;
import io.javalin.websocket.WsConnectHandler;
import io.javalin.websocket.WsMessageContext;
import io.javalin.websocket.WsMessageHandler;
import org.jetbrains.annotations.NotNull;
import tr.havelsan.ueransim.events.EventParser;
import tr.havelsan.ueransim.utils.Json;
import tr.havelsan.ueransim.utils.LogEntry;
import tr.havelsan.ueransim.utils.Logging;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public class Backend {

    private static final Queue<String> cmdQueue = new ArrayDeque<>();

    public static void main(String[] args) {

        var handler = new Handler();

        Javalin.create().start(7070).ws("/demo", ws -> {

            ws.onConnect(handler);

            ws.onMessage(handler);

        });

        new Thread(() -> ProgramPOC.run(cmdQueue)).start();
    }

    static class Handler implements WsMessageHandler, WsConnectHandler {

        final List<LogEntry> logEntries = new ArrayList<>();

        public Handler() {
            Logging.addLogHandler(logEntries::add);
        }

        @Override
        public void handleMessage(@NotNull WsMessageContext ctx) {

            for (var s : logEntries) {
                ctx.send(new Wrapper("log", s));
            }

            String s = Json.fromJson(ctx.message(), String.class);
            cmdQueue.add(s);
            logEntries.clear();

        }

        @Override
        public void handleConnect(@NotNull WsConnectContext ctx) {
            ctx.send(new Wrapper("possibleEvents", EventParser.possibleEvents()));
        }
    }

}






