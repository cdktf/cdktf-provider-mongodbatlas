// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#comment PrivatelinkEndpointServiceDataFederationOnlineArchive#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#customer_endpoint_dns_name PrivatelinkEndpointServiceDataFederationOnlineArchive#customer_endpoint_dns_name}
  */
  readonly customerEndpointDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#endpoint_id PrivatelinkEndpointServiceDataFederationOnlineArchive#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#id PrivatelinkEndpointServiceDataFederationOnlineArchive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#project_id PrivatelinkEndpointServiceDataFederationOnlineArchive#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#provider_name PrivatelinkEndpointServiceDataFederationOnlineArchive#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#region PrivatelinkEndpointServiceDataFederationOnlineArchive#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#timeouts PrivatelinkEndpointServiceDataFederationOnlineArchive#timeouts}
  */
  readonly timeouts?: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts;
}
export interface PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#create PrivatelinkEndpointServiceDataFederationOnlineArchive#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#delete PrivatelinkEndpointServiceDataFederationOnlineArchive#delete}
  */
  readonly delete?: string;
}

export function privatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsToTerraform(struct?: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function privatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsToHclTerraform(struct?: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive}
*/
export class PrivatelinkEndpointServiceDataFederationOnlineArchive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_privatelink_endpoint_service_data_federation_online_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatelinkEndpointServiceDataFederationOnlineArchive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatelinkEndpointServiceDataFederationOnlineArchive to import
  * @param importFromId The id of the existing PrivatelinkEndpointServiceDataFederationOnlineArchive that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatelinkEndpointServiceDataFederationOnlineArchive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_privatelink_endpoint_service_data_federation_online_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.20.0/docs/resources/privatelink_endpoint_service_data_federation_online_archive mongodbatlas_privatelink_endpoint_service_data_federation_online_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatelinkEndpointServiceDataFederationOnlineArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_privatelink_endpoint_service_data_federation_online_archive',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.20.0',
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
    this._comment = config.comment;
    this._customerEndpointDnsName = config.customerEndpointDnsName;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // customer_endpoint_dns_name - computed: false, optional: true, required: false
  private _customerEndpointDnsName?: string; 
  public get customerEndpointDnsName() {
    return this.getStringAttribute('customer_endpoint_dns_name');
  }
  public set customerEndpointDnsName(value: string) {
    this._customerEndpointDnsName = value;
  }
  public resetCustomerEndpointDnsName() {
    this._customerEndpointDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEndpointDnsNameInput() {
    return this._customerEndpointDnsName;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      customer_endpoint_dns_name: cdktf.stringToTerraform(this._customerEndpointDnsName),
      endpoint_id: cdktf.stringToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      region: cdktf.stringToTerraform(this._region),
      timeouts: privatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_endpoint_dns_name: {
        value: cdktf.stringToHclTerraform(this._customerEndpointDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_id: {
        value: cdktf.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: privatelinkEndpointServiceDataFederationOnlineArchiveTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivatelinkEndpointServiceDataFederationOnlineArchiveTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
