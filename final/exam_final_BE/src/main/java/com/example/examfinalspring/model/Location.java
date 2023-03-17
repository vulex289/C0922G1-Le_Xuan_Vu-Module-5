package com.example.examfinalspring.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Location {
    @Id
    private int id;
    @Column(columnDefinition = "varchar(50)")
    private String name;

    @OneToMany(mappedBy = "destination")
    @JsonIgnore
    private Set<Car> carSet;
    @OneToMany(mappedBy = "departure")
    @JsonIgnore
    private Set<Car> carSet1;


    public Set<Car> getCarSet() {
        return carSet;
    }

    public Set<Car> getCarSet1() {
        return carSet1;
    }

    public void setCarSet1(Set<Car> carSet1) {
        this.carSet1 = carSet1;
    }

    public void setCarSet(Set<Car> carSet) {
        this.carSet = carSet;
    }

    public Location() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
