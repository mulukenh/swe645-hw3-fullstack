package swe645.hw3.surveyBackEnd;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name = "survey")
public class Survey {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    int surveyId;
    String date;
    @ElementCollection
    List<String> likedAboutCampus = new ArrayList<String>();
    String interestsInCampus;
    String likelyToRecommend;
    int raffle;
    String comments;
    @OneToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
    Contact contactInfo;
    
    
	public int getId() {
		return surveyId;
	}
	
	public void setId(int id) {
		this.surveyId = id;
	}
	
	public Contact getContactInfo() {
		return contactInfo;
	}
	
	public void setContactInfo(Contact contactInfo) {
		this.contactInfo = contactInfo;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public List<String> getLikedAboutCampus() {
		return likedAboutCampus;
	}
	
	public void setLikedAboutCampus(List<String> likedAboutCampus) {
		this.likedAboutCampus = likedAboutCampus;
	}
	
	public String getInterestsInCampus() {
		return interestsInCampus;
	}
	
	public void setInterestsInCampus(String interestsInCampus) {
		this.interestsInCampus = interestsInCampus;
	}
	
	public String getLikelyToRecommend() {
		return likelyToRecommend;
	}
	
	public void setLikelyToRecommend(String likelyToRecommend) {
		this.likelyToRecommend = likelyToRecommend;
	}
	
	public int getRaffle() {
		return raffle;
	}
	
	public void setRaffle(int raffle) {
		this.raffle = raffle;
	}
	
	public String getComments() {
		return comments;
	}
	
	public void setComments(String comments) {
		this.comments = comments;
	}
}
