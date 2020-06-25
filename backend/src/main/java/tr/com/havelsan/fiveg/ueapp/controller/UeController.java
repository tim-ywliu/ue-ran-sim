package tr.com.havelsan.fiveg.ueapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping(value = "/features")
public class UeController {

    @GetMapping
    public ResponseEntity getUEFeatures() {
        return ResponseEntity.ok().build();
    }

}
