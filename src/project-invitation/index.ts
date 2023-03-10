// https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectInvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation#id ProjectInvitation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation#project_id ProjectInvitation#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation#roles ProjectInvitation#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation#username ProjectInvitation#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation mongodbatlas_project_invitation}
*/
export class ProjectInvitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_project_invitation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/mongodbatlas/r/project_invitation mongodbatlas_project_invitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectInvitationConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectInvitationConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_project_invitation',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.8.1',
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
    this._id = config.id;
    this._projectId = config.projectId;
    this._roles = config.roles;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // inviter_username - computed: true, optional: false, required: false
  public get inviterUsername() {
    return this.getStringAttribute('inviter_username');
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

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
