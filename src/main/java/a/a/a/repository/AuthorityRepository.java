package a.a.a.repository;

import a.a.a.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;
/**
 * Spring Data MongoDB repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {

}
