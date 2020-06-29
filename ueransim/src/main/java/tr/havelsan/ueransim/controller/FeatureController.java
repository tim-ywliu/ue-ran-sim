package tr.havelsan.ueransim.controller;

import io.javalin.http.Handler;
import tr.havelsan.ueransim.FlowTesting;
public class FeatureController {

    public static Handler fetchAllUsernames = ctx -> {
        FlowTesting flowTesting = new FlowTesting();
        ctx.header("Access-Control-Allow-Origin", "*");
        ctx.header("Access-Control-Allow-Credentials", "true");
        ctx.header("Access-Control-Allow-Headers","origin, content-type, accept, authorization");
        ctx.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

        //ctx.header("Access-Control-Allow-Credentials","true");
        ctx.json(flowTesting.getTypeNames());
    };

}
