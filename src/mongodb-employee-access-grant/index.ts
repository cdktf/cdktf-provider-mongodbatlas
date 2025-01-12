// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbEmployeeAccessGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable label that identifies this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#cluster_name MongodbEmployeeAccessGrant#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Expiration date for the employee access grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#expiration_time MongodbEmployeeAccessGrant#expiration_time}
  */
  readonly expirationTime: string;
  /**
  * Level of access to grant to MongoDB Employees. Possible values are CLUSTER_DATABASE_LOGS, CLUSTER_INFRASTRUCTURE or CLUSTER_INFRASTRUCTURE_AND_APP_SERVICES_SYNC_DATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#grant_type MongodbEmployeeAccessGrant#grant_type}
  */
  readonly grantType: string;
  /**
  * Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.
  * 
  * **NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#project_id MongodbEmployeeAccessGrant#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant}
*/
export class MongodbEmployeeAccessGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_mongodb_employee_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbEmployeeAccessGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbEmployeeAccessGrant to import
  * @param importFromId The id of the existing MongodbEmployeeAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbEmployeeAccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_mongodb_employee_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.25.0/docs/resources/mongodb_employee_access_grant mongodbatlas_mongodb_employee_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbEmployeeAccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbEmployeeAccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_mongodb_employee_access_grant',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.25.0',
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
    this._clusterName = config.clusterName;
    this._expirationTime = config.expirationTime;
    this._grantType = config.grantType;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // expiration_time - computed: false, optional: false, required: true
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // grant_type - computed: false, optional: false, required: true
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      grant_type: cdktf.stringToTerraform(this._grantType),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time: {
        value: cdktf.stringToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grant_type: {
        value: cdktf.stringToHclTerraform(this._grantType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
