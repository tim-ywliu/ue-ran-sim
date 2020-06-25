package tr.com.havelsan.fiveg.ueapp;


import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class UEBackendApplication {
    public static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext =
                new SpringApplicationBuilder(UEBackendApplication.class)
                        .run(args);
        // This servlet is being used for 404 Handler
        DispatcherServlet dispatcherServlet =
                (DispatcherServlet) applicationContext.getBean("dispatcherServlet");
        dispatcherServlet.setThrowExceptionIfNoHandlerFound(true);
    }
}
