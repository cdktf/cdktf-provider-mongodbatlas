/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/stream_privatelink_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasStreamPrivatelinkEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.<br>**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group or project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/stream_privatelink_endpoints#project_id DataMongodbatlasStreamPrivatelinkEndpoints#project_id}
  */
  readonly projectId: string;
}
export interface DataMongodbatlasStreamPrivatelinkEndpointsResults {
}

export function dataMongodbatlasStreamPrivatelinkEndpointsResultsToTerraform(struct?: DataMongodbatlasStreamPrivatelinkEndpointsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasStreamPrivatelinkEndpointsResultsToHclTerraform(struct?: DataMongodbatlasStreamPrivatelinkEndpointsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMongodbatlasStreamPrivatelinkEndpointsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasStreamPrivatelinkEndpointsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dns_domain - computed: true, optional: false, required: false
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }

  // dns_sub_domain - computed: true, optional: false, required: false
  public get dnsSubDomain() {
    return this.getListAttribute('dns_sub_domain');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_endpoint_id - computed: true, optional: false, required: false
  public get interfaceEndpointId() {
    return this.getStringAttribute('interface_endpoint_id');
  }

  // interface_endpoint_name - computed: true, optional: false, required: false
  public get interfaceEndpointName() {
    return this.getStringAttribute('interface_endpoint_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // provider_account_id - computed: true, optional: false, required: false
  public get providerAccountId() {
    return this.getStringAttribute('provider_account_id');
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_endpoint_id - computed: true, optional: false, required: false
  public get serviceEndpointId() {
    return this.getStringAttribute('service_endpoint_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataMongodbatlasStreamPrivatelinkEndpointsResultsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference {
    return new DataMongodbatlasStreamPrivatelinkEndpointsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/stream_privatelink_endpoints mongodbatlas_stream_privatelink_endpoints}
*/
export class DataMongodbatlasStreamPrivatelinkEndpoints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_privatelink_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasStreamPrivatelinkEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasStreamPrivatelinkEndpoints to import
  * @param importFromId The id of the existing DataMongodbatlasStreamPrivatelinkEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/stream_privatelink_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasStreamPrivatelinkEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_privatelink_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.36.0/docs/data-sources/stream_privatelink_endpoints mongodbatlas_stream_privatelink_endpoints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasStreamPrivatelinkEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasStreamPrivatelinkEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_privatelink_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.36.0',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataMongodbatlasStreamPrivatelinkEndpointsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
