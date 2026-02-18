package t.t.t;

<<<<<<< Updated upstream
import t.t.t.AsdasdasdApp;
=======
import t.t.t.AgghdrfecApp;
>>>>>>> Stashed changes
import t.t.t.config.AsyncSyncConfiguration;
import t.t.t.config.EmbeddedMongo;
import t.t.t.config.TestSecurityConfiguration;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
<<<<<<< Updated upstream
@SpringBootTest(classes = {AsdasdasdApp.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class})
=======
@SpringBootTest(classes = {AgghdrfecApp.class, AsyncSyncConfiguration.class, TestSecurityConfiguration.class})
>>>>>>> Stashed changes
@EmbeddedMongo
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public @interface IntegrationTest {
}
