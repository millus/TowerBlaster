package models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Person extends Model{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	public Long id;


    public String sessionId;

    //User info
    public String nickname;
    public String password;
    public String currentScore;
    public String highScore;

    //Private contacts list
        //(Should be boolean?)
    // ERROR IN DATABASE
   // List<Person> privateContacts = new ArrayList<Person>();

    //Business contacts list
        //(Should be boolean?)
    // ERROR IN DATABASE

//    @ManyToMany (cascade  = CascadeType.ALL,mappedBy="personContacts")
//   List<Business> businessContacts = new ArrayList<Business>();

    public static Finder<Long, Person> find = new Finder<Long, Person>(
            Long.class, Person.class);

}
