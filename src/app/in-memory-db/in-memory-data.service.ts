import {HttpMethodInterceptorArgs, InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";
import {ConcreteSolution} from "../data-model/ConcreteSolution";
import {Aggregator} from "app/data-model/Aggregator";
import {Label} from "../data-model/Label";
import {Requirement} from "../data-model/Requirement";
import {BooleanExpression} from "../data-model/BooleanExpression";
import {Capability} from "../data-model/Capability";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cs = this.createConcreteSolutions();
    let agg = this.createAggregators();

    return {cs, agg};
  }

  createConcreteSolutions(): ConcreteSolution[]{
    let impStatelessLabel:Label = new Label('implements Stateless Component');
    let warOnAzurLabel: Label = new Label('WAR on Azure');
    let accessToAzurLabel: Label = new Label('access to Azure');
    let impELBLabel: Label = new Label('implements Elastic Load Balancer');
    let warOnEBTLabel: Label = new Label('WAR on Elastic Beanstalk');
    let accessToAWSLabel: Label = new Label('access to AWS');
    let impBlobStorage: Label = new Label('implements Blob Storage');
    let ec2Volume: Label = new Label('EC2::Volume');
    let s3OnAWSStorageGateway: Label = new Label('S3 on AWS Storage Gateway');
    let blobStorageOnAzure: Label = new Label('Blob Storage on Azure');
    let awsLambdaLabel: Label = new Label('Java code on AWS Lambda');

    //CS1.1
    let cs1_1Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(impStatelessLabel)),
      new Requirement(new BooleanExpression(warOnAzurLabel)),
      new Requirement(new BooleanExpression(accessToAzurLabel))
    ];
    let cs1_1Caps: Capability[] = [new Capability(impELBLabel)];
    let cs1_1Metadata: Map<string, string> = new Map([['cost', '0']]);
    let cs1_1:ConcreteSolution = new ConcreteSolution('cs1.1', 'Azure-based Elastic Load Balancer Implementation',
      cs1_1Reqs, cs1_1Caps, cs1_1Metadata, ['Elastic Load Balancer']);

    //CS1.2
    let cs1_2Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(impStatelessLabel)),
      new Requirement(new BooleanExpression(warOnEBTLabel)),
      new Requirement(new BooleanExpression(accessToAWSLabel))
    ];
    let cs1_2Caps: Capability[] = [new Capability(impELBLabel)];
    let cs1_2Metadata: Map<string, string> = new Map([['cost', '0']]);
    let cs1_2:ConcreteSolution = new ConcreteSolution('cs1.2', 'Cloud Formation Template-based Elastic Load Balancer',
      cs1_2Reqs, cs1_2Caps, cs1_2Metadata, ['Elastic Load Balancer']);


    //CS2.1
    let cs2_1Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(impBlobStorage)),
      new Requirement(new BooleanExpression(accessToAWSLabel))
    ];
    let cs2_1Caps: Capability[] = [
      new Capability(warOnEBTLabel),
      new Capability(impStatelessLabel)
    ];
    let cs2_1Metadata: Map<string, string> = new Map([['cost', '10']]);
    let cs2_1:ConcreteSolution = new ConcreteSolution('cs2.1', 'Cloud Formation Template-based Stateless Component',
      cs2_1Reqs, cs2_1Caps, cs2_1Metadata, ['Stateless Component']);


    //CS2.2
    let cs2_2Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(impBlobStorage)),
      new Requirement(new BooleanExpression(accessToAzurLabel))
    ];
    let cs2_2Caps: Capability[] = [
      new Capability(impStatelessLabel),
      new Capability(warOnAzurLabel)
    ];
    let cs2_2Metadata: Map<string, string> = new Map([['cost', '11']]);
    let cs2_2:ConcreteSolution = new ConcreteSolution('cs2.2', 'Azure-based Stateless Component Implementation',
      cs2_2Reqs, cs2_2Caps, cs2_2Metadata, ['Elastic Load Balancer']);

    //CS2.3
    let cs2_3Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(impBlobStorage)),
      new Requirement(new BooleanExpression(accessToAWSLabel))
    ];
    let cs2_3Caps: Capability[] = [
      new Capability(awsLambdaLabel),
      new Capability(impStatelessLabel),
      new Capability(impELBLabel)
    ];
    let cs2_3Metadata: Map<string, string> = new Map([['cost', '3']]);
    let cs2_3:ConcreteSolution = new ConcreteSolution('cs2.3', 'Java code on AWS Lambda',
      cs2_3Reqs, cs2_3Caps, cs2_3Metadata, ['Stateless Component', 'Elastic Load Balancer']);


    //CS3.1
    let cs3_1Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(accessToAWSLabel))
    ];
    let cs3_1Caps: Capability[] = [
      new Capability(impBlobStorage),
      new Capability(ec2Volume)
    ];
    let cs3_1Metadata: Map<string, string> = new Map([['cost', '5']]);
    let cs3_1:ConcreteSolution = new ConcreteSolution('cs3.1', 'Cloud Formation Template-based Blob Storage',
      cs3_1Reqs, cs3_1Caps, cs3_1Metadata, ['Blob Storage']);

    //CS3.2
    let cs3_2Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(accessToAWSLabel))
    ];
    let cs3_2Caps: Capability[] = [
      new Capability(impBlobStorage),
      new Capability(s3OnAWSStorageGateway)
    ];
    let cs3_2Metadata: Map<string, string> = new Map([['cost', '15']]);
    let cs3_2:ConcreteSolution = new ConcreteSolution('cs3.2', 'AWS Storage Gateway-based S3 Blob Storage',
      cs3_2Reqs, cs3_2Caps, cs3_2Metadata, ['Blob Storage']);


    //CS3.3
    let cs3_3Reqs: Requirement[] = [
      new Requirement(new BooleanExpression(accessToAzurLabel))
    ];
    let cs3_3Caps: Capability[] = [
      new Capability(impBlobStorage),
      new Capability(blobStorageOnAzure)
    ];
    let cs3_3Metadata: Map<string, string> = new Map([['cost', '3']]);
    let cs3_3:ConcreteSolution = new ConcreteSolution('cs3.3', 'Azure-based Blob Storage implementation',
      cs3_3Reqs, cs3_3Caps, cs3_3Metadata, ['Blob Storage']);


    return [cs1_1, cs1_2, cs2_1, cs2_2, cs2_3, cs3_1, cs3_2, cs3_3];
  }

  createAggregators(): Aggregator[] {
    return [
      new Aggregator('cs1.1', 'cs1.2', 'agg2'),
      new Aggregator('cs1.2', 'cs2.1', 'agg1'),
      new Aggregator('cs2.1', 'cs3.1', 'agg3'),
      new Aggregator('cs2.1', 'cs3.2', 'agg4'),
      new Aggregator('cs2.2', 'cs3.2', 'agg5'),
      new Aggregator('cs2.2', 'cs3.3', 'agg6')
    ];
  }
}
