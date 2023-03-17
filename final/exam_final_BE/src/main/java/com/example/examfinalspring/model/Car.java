package com.example.examfinalspring.model;

import javax.persistence.*;

@Entity
public class Car {
    @Id
    private String id;
    private String companyName;
    private String phoneNumber;
    private String email;
    private String startHour;
    private String endHour;
    @ManyToOne
    @JoinColumn(name = "card_type_id", referencedColumnName = "id")
    private CarType carType;
    @ManyToOne
    @JoinColumn(name = "departure_id", referencedColumnName = "id")
    private Location departure;
    @ManyToOne
    @JoinColumn(name = "destination_id", referencedColumnName = "id")
    private Location destination;

    public Car() {
    }

    public Location getDestination() {
        return destination;
    }

    public void setDestination(Location destination) {
        this.destination = destination;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartHour() {
        return startHour;
    }

    public void setStartHour(String startHour) {
        this.startHour = startHour;
    }

    public String getEndHour() {
        return endHour;
    }

    public void setEndHour(String endHour) {
        this.endHour = endHour;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public Location getDeparture() {
        return departure;
    }

    public void setDeparture(Location location) {
        this.departure = location;
    }
}
