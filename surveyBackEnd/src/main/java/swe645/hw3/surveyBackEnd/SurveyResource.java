package swe645.hw3.surveyBackEnd;

import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

@Path("surveys")
public class SurveyResource {
	SurveyRepository repo = new SurveyRepository();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Survey> getSurveys() {
		return repo.getAllSurveys();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Survey getSurvey(@PathParam("id") int id) {
		return repo.getSurvey(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Survey addSurvey(Survey survey) {
		System.out.println(survey.getId());
		System.out.println(survey.getContactInfo().getFirstName() + " " + survey.getContactInfo().getLastName());
		System.out.println(survey.getDate());
		System.out.println(survey.getLikedAboutCampus());
		System.out.println(survey.getInterestsInCampus());
		System.out.println(survey.getLikelyToRecommend());
		System.out.println(survey.getRaffle());
		System.out.println(survey.getComments());
		repo.addSurvey(survey);
	    return survey;
	}
}
