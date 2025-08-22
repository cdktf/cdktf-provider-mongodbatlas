/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasStreamAccountDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of `aws` or `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details#cloud_provider DataMongodbatlasStreamAccountDetails#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](https://www.mongodb.com/docs/api/doc/atlas-admin-api-v2/operation/operation-listprojects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details#project_id DataMongodbatlasStreamAccountDetails#project_id}
  */
  readonly projectId: string;
  /**
  * The cloud provider specific region name, i.e. `US_EAST_1` for cloud provider `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details#region_name DataMongodbatlasStreamAccountDetails#region_name}
  */
  readonly regionName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details mongodbatlas_stream_account_details}
*/
export class DataMongodbatlasStreamAccountDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_stream_account_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasStreamAccountDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasStreamAccountDetails to import
  * @param importFromId The id of the existing DataMongodbatlasStreamAccountDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasStreamAccountDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_stream_account_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/stream_account_details mongodbatlas_stream_account_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasStreamAccountDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasStreamAccountDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_stream_account_details',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.40.0',
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
    this._cloudProvider = config.cloudProvider;
    this._projectId = config.projectId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // azure_subscription_id - computed: true, optional: false, required: false
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

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

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      project_id: cdktf.stringToTerraform(this._projectId),
      region_name: cdktf.stringToTerraform(this._regionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
