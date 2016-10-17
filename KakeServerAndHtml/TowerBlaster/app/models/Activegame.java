package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Created by Kristian
 */
@Entity
public class Activegame extends Model{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;



    public String sessionId;
    public String player1;
    public String player2;

    public ArrayList<Integer> p1list;
    public ArrayList<Integer> p2list;
    public ArrayList<Integer> gamelist;

    public boolean player1turn;

    public static Finder<Long, Activegame> find = new Finder<Long, Activegame>(
            Long.class, Activegame.class);

}
