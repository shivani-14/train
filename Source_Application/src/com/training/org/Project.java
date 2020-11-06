package com.training.org;

public class Project {
	
	private String projectId;
	private String projectName;
	private String clientName;
	
	
	
	public Project() {
		projectId="";
		projectName="";
		clientName="";
		
	}



	public Project(String projectId, String projectName, String clientName) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.clientName = clientName;
	}



	public String getProjectId() {
		return projectId;
	}



	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}



	public String getProjectName() {
		return projectName;
	}



	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}



	public String getClientName() {
		return clientName;
	}



	public void setClientName(String clientName) {
		this.clientName = clientName;
	}



	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectName=" + projectName + ", clientName=" + clientName + "]";
	}
	
	
}
