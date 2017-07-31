import { InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";
import {ConcreteSolutionModel} from "../data-model/concrete-solution.model";
import {BasicAggregatorModel} from "app/data-model/basic-aggregator.model";
import {LabelModel} from "../data-model/label.model";
import {RequirementModel} from "../data-model/requirement.model";
import {BooleanExpressionModel} from "../data-model/boolean-expression.model";
import {CapabilityModel} from "../data-model/capability.model";
import {AbstractAggregatorModel} from "../data-model/abstract-aggregator.model";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cs = this.createConcreteSolutions();
    let agg = this.createAggregators();

    return {cs, agg};
  }

  createConcreteSolutions(): ConcreteSolutionModel[]{
    let impStatelessLabel:LabelModel = new LabelModel('implements Stateless Component');
    let warOnAzurLabel: LabelModel = new LabelModel('WAR on Azure');
    let accessToAzurLabel: LabelModel = new LabelModel('access to Azure');
    let impELBLabel: LabelModel = new LabelModel('implements Elastic Load Balancer');
    let warOnEBTLabel: LabelModel = new LabelModel('WAR on Elastic Beanstalk');
    let accessToAWSLabel: LabelModel = new LabelModel('access to AWS');
    let impBlobStorage: LabelModel = new LabelModel('implements Blob Storage');
    let ec2Volume: LabelModel = new LabelModel('EC2::Volume');
    let s3OnAWSStorageGateway: LabelModel = new LabelModel('S3 on AWS Storage Gateway');
    let blobStorageOnAzure: LabelModel = new LabelModel('Blob Storage on Azure');
    let awsLambdaLabel: LabelModel = new LabelModel('Java code on AWS Lambda');

    //CS1.1
    let cs1_1Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${impStatelessLabel}'`),
      new RequirementModel(`name = '${warOnAzurLabel}'` ),
      new RequirementModel(`name = '${accessToAzurLabel}'`)
    ];
    let cs1_1Caps: CapabilityModel[] = [new CapabilityModel(impELBLabel, new Map<string, string>())];
    let cs1_1Metadata: Map<string, string> = new Map([['cost', '0']]);
    let cs1_1:ConcreteSolutionModel = new ConcreteSolutionModel('cs1.1', 'Azure-based Elastic Load Balancer Implementation',
      cs1_1Reqs, cs1_1Caps, cs1_1Metadata, 'Elastic Load Balancer');

    //CS1.2
    let cs1_2Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${impStatelessLabel}'`),
      new RequirementModel(`name = '${warOnEBTLabel}'`),
      new RequirementModel(`name = '${accessToAWSLabel}'`)
    ];
    let cs1_2Caps: CapabilityModel[] = [new CapabilityModel(impELBLabel, new Map<string, string>())];
    let cs1_2Metadata: Map<string, string> = new Map([['cost', '0']]);
    let cs1_2:ConcreteSolutionModel = new ConcreteSolutionModel('cs1.2', 'Cloud Formation Template-based Elastic Load Balancer',
      cs1_2Reqs, cs1_2Caps, cs1_2Metadata, 'Elastic Load Balancer');


    //CS2.1
    let cs2_1Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${impBlobStorage}'`),
      new RequirementModel(`name = '${accessToAWSLabel}'`)
    ];
    let cs2_1Caps: CapabilityModel[] = [
      new CapabilityModel(warOnEBTLabel, new Map<string, string>()),
      new CapabilityModel(impStatelessLabel, new Map<string, string>())
    ];
    let cs2_1Metadata: Map<string, string> = new Map([['cost', '10']]);
    let cs2_1:ConcreteSolutionModel = new ConcreteSolutionModel('cs2.1', 'Cloud Formation Template-based Stateless Component',
      cs2_1Reqs, cs2_1Caps, cs2_1Metadata, 'Stateless Component');


    //CS2.2
    let cs2_2Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${impBlobStorage}'`),
      new RequirementModel(`name = '${accessToAzurLabel}'`)
    ];
    let cs2_2Caps: CapabilityModel[] = [
      new CapabilityModel(impStatelessLabel, new Map<string, string>()),
      new CapabilityModel(warOnAzurLabel, new Map<string, string>())
    ];
    let cs2_2Metadata: Map<string, string> = new Map([['cost', '11']]);
    let cs2_2:ConcreteSolutionModel = new ConcreteSolutionModel('cs2.2', 'Azure-based Stateless Component Implementation',
      cs2_2Reqs, cs2_2Caps, cs2_2Metadata, 'Stateless Component');

    //CS2.3
    // let cs2_3Reqs: RequirementModel[] = [
    //   new RequirementModel(new BooleanExpressionModel(impBlobStorage)),
    //   new RequirementModel(new BooleanExpressionModel(accessToAWSLabel))
    // ];
    // let cs2_3Caps: CapabilityModel[] = [
    //   new CapabilityModel(awsLambdaLabel),
    //   new CapabilityModel(impStatelessLabel),
    //   new CapabilityModel(impELBLabel)
    // ];
    // let cs2_3Metadata: Map<string, string> = new Map([['cost', '3']]);
    // let cs2_3:ConcreteSolutionModel = new ConcreteSolutionModel('cs2.3', 'Java code on AWS Lambda',
    //   cs2_3Reqs, cs2_3Caps, cs2_3Metadata, ['Stateless Component', 'Elastic Load Balancer']);


    //CS3.1
    let cs3_1Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${accessToAWSLabel}'`)
    ];
    let cs3_1Caps: CapabilityModel[] = [
      new CapabilityModel(impBlobStorage, new Map<string, string>()),
      new CapabilityModel(ec2Volume, new Map<string, string>())
    ];
    let cs3_1Metadata: Map<string, string> = new Map([['cost', '5']]);
    let cs3_1:ConcreteSolutionModel = new ConcreteSolutionModel('cs3.1', 'Cloud Formation Template-based Blob Storage',
      cs3_1Reqs, cs3_1Caps, cs3_1Metadata, 'Blob Storage');

    //CS3.2
    let cs3_2Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${accessToAWSLabel}'`)
    ];
    let cs3_2Caps: CapabilityModel[] = [
      new CapabilityModel(impBlobStorage, new Map<string, string>()),
      new CapabilityModel(s3OnAWSStorageGateway, new Map<string, string>())
    ];
    let cs3_2Metadata: Map<string, string> = new Map([['cost', '15']]);
    let cs3_2:ConcreteSolutionModel = new ConcreteSolutionModel('cs3.2', 'AWS Storage Gateway-based S3 Blob Storage',
      cs3_2Reqs, cs3_2Caps, cs3_2Metadata, 'Blob Storage');


    //CS3.3
    let cs3_3Reqs: RequirementModel[] = [
      new RequirementModel(`name = '${accessToAzurLabel}'`)
    ];
    let cs3_3Caps: CapabilityModel[] = [
      new CapabilityModel(impBlobStorage, new Map<string, string>()),
      new CapabilityModel(blobStorageOnAzure, new Map<string, string>())
    ];
    let cs3_3Metadata: Map<string, string> = new Map([['cost', '3']]);
    let cs3_3:ConcreteSolutionModel = new ConcreteSolutionModel('cs3.3', 'Azure-based Blob Storage implementation',
      cs3_3Reqs, cs3_3Caps, cs3_3Metadata, 'Blob Storage');


    return [cs1_1, cs1_2, cs2_1, cs2_2, cs3_1, cs3_2, cs3_3];
  }

  createAggregators(): AbstractAggregatorModel[] {
    return [
      new BasicAggregatorModel('cs1.1', 'cs2.2', 'agg2'),
      new BasicAggregatorModel('cs1.2', 'cs2.1', 'agg1'),
      new BasicAggregatorModel('cs2.1', 'cs3.1', 'agg3'),
      new BasicAggregatorModel('cs2.1', 'cs3.2', 'agg4'),
      new BasicAggregatorModel('cs2.2', 'cs3.2', 'agg5'),
      new BasicAggregatorModel('cs2.2', 'cs3.3', 'agg6')
      ,new BasicAggregatorModel('cs1.1', 'cs2.2', 'fakeAgg')
    ];
  }
}
