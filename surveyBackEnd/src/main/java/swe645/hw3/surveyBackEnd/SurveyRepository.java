package swe645.hw3.surveyBackEnd;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class SurveyRepository {
	Transaction transaction = null;
	
	public List<Survey> getAllSurveys() {
		List<Survey> surveys = new ArrayList<Survey>();
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
		    CriteriaBuilder criteriabuilder = session.getCriteriaBuilder();
		    CriteriaQuery<Survey> criteriaQuery = criteriabuilder.createQuery(Survey.class);
		    Root<Survey> rootEntry = criteriaQuery.from(Survey.class);
		    CriteriaQuery<Survey> all = criteriaQuery.select(rootEntry);
		 
		    TypedQuery<Survey> allQuery = session.createQuery(all);
		    surveys = allQuery.getResultList();
			transaction.commit();
		} catch (Exception e){
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}
		return surveys;
	}
	
	public Survey getSurvey(int id) {
		Survey survey = new Survey();
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			survey = session.get(Survey.class, id);
			transaction.commit();
		} catch (Exception e){
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}
		return survey;
	}
	
	public void addSurvey(Survey survey) {
		try {
			Session session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			session.save(survey);
			transaction.commit();
		} catch (Exception e){
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
		}
	}
}
