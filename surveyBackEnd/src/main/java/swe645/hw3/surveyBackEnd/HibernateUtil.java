package swe645.hw3.surveyBackEnd;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtil {
	private static SessionFactory sessionFactory;
	public static SessionFactory getSessionFactory() {
		if (sessionFactory == null) {
			try {
				Configuration config = new Configuration()
						.configure()
						.addAnnotatedClass(Survey.class)
						.addAnnotatedClass(Contact.class);
						// .setProperty("hibernate.connection.url", System.getenv("DB_CONNECTION_URL"))
						// .setProperty("hibernate.connection.username", System.getenv("DB_USER"))
						// .setProperty("hibernate.connection.password", System.getenv("DB_PASSWORD"));
				ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
						.applySettings(config.getProperties())
						.build();
				sessionFactory = config.buildSessionFactory(serviceRegistry);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return sessionFactory;
	}
}
