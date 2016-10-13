package controllers;

import models.Person;
import play.db.jpa.JPA;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by Kristian
 */
public class Security {

    //Authenticate the entered email and password.
    public Person login(Person p){
        Query q = JPA.em().createQuery("select p from Person p");
        List<Person> results = q.getResultList();
        if(!results.isEmpty()){
            for(Person person : results){
                if(person.nickname.equals(p.nickname) && person.password.equals(p.password)){
                    return person;
                }
            }
        }
        return null;
    }
    public Person authenticate(Person p){
        Query q = JPA.em().createQuery("select p from Person p");
        List<Person> results = q.getResultList();
        if(!results.isEmpty()){
            for(Person person : results){
                if(person.sessionId.equals(p.sessionId) && person.nickname.equals(p.nickname)){
                    return person;
                }
            }
        }
        return null;
    }


    //Authenticate the entered email and password.
    public Person webLogin(Person p){
        Query q = JPA.em().createQuery("select p from Person p");
        List<Person> results = q.getResultList();
        if(!results.isEmpty()){
            for(Person person : results){
                if(person.nickname.equals(p.nickname) && person.password.equals(p.password)){
                    return person;
                }
            }
        }
        return null;
    }

}

