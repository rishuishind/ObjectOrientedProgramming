package main.java.observer;

public class MobileObserver implements Observer {

    @Override
    public void update() {
        System.out.println("It has changed the value");
    }

}
