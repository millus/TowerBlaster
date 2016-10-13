package models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Kristian
 */
@Entity
public class Business extends Model{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;

    /*
    @ManyToMany
    @JoinTable(
            name = "business_person",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "id")
    )
    List<Person> personContacts = new ArrayList<Person>();
*/
    //public Person person;

    public String respA;
    public String respB;
    public int businessPhone;
    public String respC;
    public int businessZip;
    public String businessRegion;
    //public boolean nfcAccess;

    public static Finder<Long, Business> find = new Finder<Long, Business>(
            Long.class, Business.class);

}
