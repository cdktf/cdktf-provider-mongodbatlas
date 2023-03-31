// https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key#description ProjectApiKey#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key#id ProjectApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key#project_id ProjectApiKey#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key#role_names ProjectApiKey#role_names}
  */
  readonly roleNames: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key mongodbatlas_project_api_key}
*/
export class ProjectApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project_api_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_api_key mongodbatlas_project_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_project_api_key',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.2',
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
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._roleNames = config.roleNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // role_names - computed: false, optional: false, required: true
  private _roleNames?: string[]; 
  public get roleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('role_names'));
  }
  public set roleNames(value: string[]) {
    this._roleNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleNames),
    };
  }
}
