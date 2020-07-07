package tr.havelsan.ueransim.controller;

import io.javalin.http.Handler;
import tr.havelsan.ueransim.events.EventParser;

public class FeatureController {

    public static Handler optionsGeneric = ctx -> {
        ctx.header("Access-Control-Allow-Origin", "*");
        ctx.header("Access-Control-Allow-Headers","*");
        ctx.header("Access-Control-Allow-Methods", "*");
    };

    public static Handler fetchFeatures = ctx -> {
        optionsGeneric.handle(ctx);

        ctx.json(EventParser.possibleEvents());
    };

    public static Handler postCtx = ctx -> {
        optionsGeneric.handle(ctx);
    };
}
