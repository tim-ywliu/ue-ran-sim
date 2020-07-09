package tr.havelsan.ueransim.controller;

import tr.havelsan.ueransim.utils.Json;

public class Wrapper {
    public final String type;
    public final Object message;

    public Wrapper(String type, Object message) {
        this.type = type;
        this.message = message;
    }

    @Override
    public String toString() {
        return Json.toJson(this);
    }
}