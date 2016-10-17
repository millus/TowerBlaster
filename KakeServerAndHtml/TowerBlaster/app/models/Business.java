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

    public String respA;
    public String respB;
    public String respC;
    //public String respD;

    public static Finder<Long, Business> find = new Finder<Long, Business>(
            Long.class, Business.class);

}
