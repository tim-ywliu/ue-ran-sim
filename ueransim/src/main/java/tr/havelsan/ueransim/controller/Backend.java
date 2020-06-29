package tr.havelsan.ueransim.controller;

import io.javalin.Javalin;
import tr.havelsan.ueransim.mts.MtsInitializer;

public class Backend {

    public static void main(String[] args) {
        MtsInitializer.initMts();

        Javalin app = Javalin.create().start(7000);

        app.get("/features", FeatureController.fetchAllUsernames);
        app.options("/features", FeatureController.optionsGeneric);

        app.post("/createResource", FeatureController.postCtx);
        app.options("/createResource", FeatureController.optionsGeneric);
    }
}
