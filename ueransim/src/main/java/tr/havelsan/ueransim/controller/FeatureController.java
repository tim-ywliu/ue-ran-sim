package tr.havelsan.ueransim.controller;

import io.javalin.http.Handler;
import tr.havelsan.ueransim.FlowTesting;
import tr.havelsan.ueransim.utils.FlowScanner;

public class FeatureController {

    public static Handler optionsGeneric = ctx -> {
        ctx.header("Access-Control-Allow-Origin", "*");
        ctx.header("Access-Control-Allow-Headers","*");
        ctx.header("Access-Control-Allow-Methods", "*");
    };

    public static Handler fetchAllUsernames = ctx -> {
        optionsGeneric.handle(ctx);

        ctx.json(FlowScanner.getFlowNames());
    };

    public static Handler postCtx = ctx -> {
        optionsGeneric.handle(ctx);

        System.out.printf("Body"+ ctx.body());
        ctx.json("5");
    };
}
