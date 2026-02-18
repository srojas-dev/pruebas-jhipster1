package t.t.t;

import com.tngtech.archunit.core.importer.ImportOption.DoNotIncludeTests;
import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

import static com.tngtech.archunit.base.DescribedPredicate.alwaysTrue;
import static com.tngtech.archunit.core.domain.JavaClass.Predicates.belongToAnyOf;
import static com.tngtech.archunit.library.Architectures.layeredArchitecture;

<<<<<<< Updated upstream
@AnalyzeClasses(packagesOf = AsdasdasdApp.class, importOptions = DoNotIncludeTests.class)
=======
@AnalyzeClasses(packagesOf = AgghdrfecApp.class, importOptions = DoNotIncludeTests.class)
>>>>>>> Stashed changes
class TechnicalStructureTest {

    // prettier-ignore
    @ArchTest
    static final ArchRule respectsTechnicalArchitectureLayers = layeredArchitecture()
        .consideringAllDependencies()
        .layer("Config").definedBy("..config..")
        .layer("Web").definedBy("..web..")
        .optionalLayer("Service").definedBy("..service..")
        .layer("Security").definedBy("..security..")
        .optionalLayer("Persistence").definedBy("..repository..")
        .layer("Domain").definedBy("..domain..")

        .whereLayer("Config").mayNotBeAccessedByAnyLayer()
        .whereLayer("Web").mayOnlyBeAccessedByLayers("Config")
        .whereLayer("Service").mayOnlyBeAccessedByLayers("Web", "Config")
        .whereLayer("Security").mayOnlyBeAccessedByLayers("Config", "Service", "Web")
        .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service", "Security", "Web", "Config")
        .whereLayer("Domain").mayOnlyBeAccessedByLayers("Persistence", "Service", "Security", "Web", "Config")

<<<<<<< Updated upstream
        .ignoreDependency(belongToAnyOf(AsdasdasdApp.class), alwaysTrue())
=======
        .ignoreDependency(belongToAnyOf(AgghdrfecApp.class), alwaysTrue())
>>>>>>> Stashed changes
        .ignoreDependency(alwaysTrue(), belongToAnyOf(
            t.t.t.config.Constants.class,
            t.t.t.config.ApplicationProperties.class
        ));
}
