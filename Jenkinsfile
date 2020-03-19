#!groovy
import hudson.model.*


try {
	def branch = '';
	def source = '';
    node {
        stage('checkout-and-test') {
			sh "oc project panorama"
			//checkout the code and record the commit hash for easy traceability
			checkout scm
      		sh "git rev-parse HEAD > .git/commit-id"
      		def commit_id = readFile('.git/commit-id')
			
			//capture the branch name and keep it stored lower case
			branch = BRANCH_NAME.toLowerCase();
			source = BRANCH_NAME
			//if the branch is a feature, capture the branch name of the feature for shorter names
			if (branch.contains('/')){
						branch = branch.substring(branch.lastIndexOf("/") + 1)
			}

			// find any existing resources for this branch
            sh """oc get dc -l app='panorama-ui-$branch' &> tempGetDC"""
            def existingDeploymentConfig = readFile('tempGetDC').trim()

            if(existingDeploymentConfig == "No resources found.") {
                sh """oc process -p NAME='panorama-ui-$branch' -p SOURCE_REPOSITORY_URL=https://github.com/crossvale-inc/panorama-ui.git SOURCE_REPOSITORY_REF=$source -p MEMORY_LIMIT=2Gi -l app='panorama-ui-$branch' panorama-ui-template-v2 | oc apply -f -"""
                openshiftBuild apiURL: '', authToken: '', bldCfg: """panorama-ui-$branch""", buildName: '', checkForTriggeredDeployments: 'false', commitID: '', namespace: 'panorama', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
                openshiftVerifyBuild apiURL: '', bldCfg: """panorama-ui-$branch""", checkForTriggeredDeployments: 'false', namespace: 'panorama', verbose: 'false'
                openshiftDeploy depCfg: """panorama-ui-$branch""", verbose: 'false', namespace: 'panorama'
                openshiftVerifyDeployment depCfg: """panorama-ui-$branch""", verbose: 'false', namespace: 'panorama'
            } else {
                openshiftBuild apiURL: '', authToken: '', bldCfg: """panorama-ui-$branch""", buildName: '', checkForTriggeredDeployments: 'false', commitID: '', namespace: 'panorama', showBuildLogs: 'true', verbose: 'false', waitTime: '', waitUnit: 'sec'
                openshiftDeploy depCfg: """panorama-ui-$branch""", verbose: 'false', namespace: 'panorama'
                openshiftVerifyDeployment depCfg: """panorama-ui-$branch""", verbose: 'false', namespace: 'panorama'
            }
        }        
    }
} catch (err) {
    echo "in catch block"
    echo "Caught: ${err}"
    currentBuild.result = 'FAILURE'
    throw err
}
