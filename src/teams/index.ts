// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams#id Teams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams#name Teams#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams#org_id Teams#org_id}
  */
  readonly orgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams#usernames Teams#usernames}
  */
  readonly usernames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams mongodbatlas_teams}
*/
export class Teams extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_teams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Teams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Teams to import
  * @param importFromId The id of the existing Teams that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Teams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_teams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/resources/teams mongodbatlas_teams} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamsConfig
  */
  public constructor(scope: Construct, id: string, config: TeamsConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_teams',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.1',
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
    this._name = config.name;
    this._orgId = config.orgId;
    this._usernames = config.usernames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // usernames - computed: false, optional: false, required: true
  private _usernames?: string[]; 
  public get usernames() {
    return cdktf.Fn.tolist(this.getListAttribute('usernames'));
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usernames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usernames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usernames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
