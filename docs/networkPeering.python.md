# `networkPeering` Submodule <a name="`networkPeering` Submodule" id="@cdktf/provider-mongodbatlas.networkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPeering <a name="NetworkPeering" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering mongodbatlas_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_id: str,
  project_id: str,
  provider_name: str,
  accepter_region_name: str = None,
  atlas_cidr_block: str = None,
  atlas_gcp_project_id: str = None,
  atlas_vpc_name: str = None,
  aws_account_id: str = None,
  azure_directory_id: str = None,
  azure_subscription_id: str = None,
  gcp_project_id: str = None,
  id: str = None,
  network_name: str = None,
  resource_group_name: str = None,
  route_table_cidr_block: str = None,
  vnet_name: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.accepterRegionName">accepter_region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasCidrBlock">atlas_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasGcpProjectId">atlas_gcp_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasVpcName">atlas_vpc_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureDirectoryId">azure_directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.networkName">network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.routeTableCidrBlock">route_table_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vnetName">vnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.containerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `accepter_region_name`<sup>Optional</sup> <a name="accepter_region_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.accepterRegionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `atlas_cidr_block`<sup>Optional</sup> <a name="atlas_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `atlas_gcp_project_id`<sup>Optional</sup> <a name="atlas_gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasGcpProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `atlas_vpc_name`<sup>Optional</sup> <a name="atlas_vpc_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.atlasVpcName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `azure_directory_id`<sup>Optional</sup> <a name="azure_directory_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureDirectoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `azure_subscription_id`<sup>Optional</sup> <a name="azure_subscription_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.azureSubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `gcp_project_id`<sup>Optional</sup> <a name="gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.gcpProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.networkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `route_table_cidr_block`<sup>Optional</sup> <a name="route_table_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.routeTableCidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `vnet_name`<sup>Optional</sup> <a name="vnet_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vnetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName">reset_accepter_region_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock">reset_atlas_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId">reset_atlas_gcp_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName">reset_atlas_vpc_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId">reset_azure_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId">reset_azure_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId">reset_gcp_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName">reset_network_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock">reset_route_table_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName">reset_vnet_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accepter_region_name` <a name="reset_accepter_region_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAccepterRegionName"></a>

```python
def reset_accepter_region_name() -> None
```

##### `reset_atlas_cidr_block` <a name="reset_atlas_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasCidrBlock"></a>

```python
def reset_atlas_cidr_block() -> None
```

##### `reset_atlas_gcp_project_id` <a name="reset_atlas_gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasGcpProjectId"></a>

```python
def reset_atlas_gcp_project_id() -> None
```

##### `reset_atlas_vpc_name` <a name="reset_atlas_vpc_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAtlasVpcName"></a>

```python
def reset_atlas_vpc_name() -> None
```

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_azure_directory_id` <a name="reset_azure_directory_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureDirectoryId"></a>

```python
def reset_azure_directory_id() -> None
```

##### `reset_azure_subscription_id` <a name="reset_azure_subscription_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetAzureSubscriptionId"></a>

```python
def reset_azure_subscription_id() -> None
```

##### `reset_gcp_project_id` <a name="reset_gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetGcpProjectId"></a>

```python
def reset_gcp_project_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_name` <a name="reset_network_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetNetworkName"></a>

```python
def reset_network_name() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_route_table_cidr_block` <a name="reset_route_table_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetRouteTableCidrBlock"></a>

```python
def reset_route_table_cidr_block() -> None
```

##### `reset_vnet_name` <a name="reset_vnet_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVnetName"></a>

```python
def reset_vnet_name() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeering.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId">atlas_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState">error_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName">error_state_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId">peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName">status_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput">accepter_region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput">atlas_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput">atlas_gcp_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput">atlas_vpc_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput">azure_directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput">azure_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput">container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput">gcp_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput">route_table_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput">vnet_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName">accepter_region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock">atlas_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId">atlas_gcp_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName">atlas_vpc_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId">azure_directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId">container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock">route_table_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName">vnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `atlas_id`<sup>Required</sup> <a name="atlas_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasId"></a>

```python
atlas_id: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `error_state`<sup>Required</sup> <a name="error_state" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorState"></a>

```python
error_state: str
```

- *Type:* str

---

##### `error_state_name`<sup>Required</sup> <a name="error_state_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.errorStateName"></a>

```python
error_state_name: str
```

- *Type:* str

---

##### `peer_id`<sup>Required</sup> <a name="peer_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.peerId"></a>

```python
peer_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_name`<sup>Required</sup> <a name="status_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.statusName"></a>

```python
status_name: str
```

- *Type:* str

---

##### `accepter_region_name_input`<sup>Optional</sup> <a name="accepter_region_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionNameInput"></a>

```python
accepter_region_name_input: str
```

- *Type:* str

---

##### `atlas_cidr_block_input`<sup>Optional</sup> <a name="atlas_cidr_block_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlockInput"></a>

```python
atlas_cidr_block_input: str
```

- *Type:* str

---

##### `atlas_gcp_project_id_input`<sup>Optional</sup> <a name="atlas_gcp_project_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectIdInput"></a>

```python
atlas_gcp_project_id_input: str
```

- *Type:* str

---

##### `atlas_vpc_name_input`<sup>Optional</sup> <a name="atlas_vpc_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcNameInput"></a>

```python
atlas_vpc_name_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `azure_directory_id_input`<sup>Optional</sup> <a name="azure_directory_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryIdInput"></a>

```python
azure_directory_id_input: str
```

- *Type:* str

---

##### `azure_subscription_id_input`<sup>Optional</sup> <a name="azure_subscription_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionIdInput"></a>

```python
azure_subscription_id_input: str
```

- *Type:* str

---

##### `container_id_input`<sup>Optional</sup> <a name="container_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerIdInput"></a>

```python
container_id_input: str
```

- *Type:* str

---

##### `gcp_project_id_input`<sup>Optional</sup> <a name="gcp_project_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectIdInput"></a>

```python
gcp_project_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `route_table_cidr_block_input`<sup>Optional</sup> <a name="route_table_cidr_block_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlockInput"></a>

```python
route_table_cidr_block_input: str
```

- *Type:* str

---

##### `vnet_name_input`<sup>Optional</sup> <a name="vnet_name_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetNameInput"></a>

```python
vnet_name_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `accepter_region_name`<sup>Required</sup> <a name="accepter_region_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.accepterRegionName"></a>

```python
accepter_region_name: str
```

- *Type:* str

---

##### `atlas_cidr_block`<sup>Required</sup> <a name="atlas_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasCidrBlock"></a>

```python
atlas_cidr_block: str
```

- *Type:* str

---

##### `atlas_gcp_project_id`<sup>Required</sup> <a name="atlas_gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasGcpProjectId"></a>

```python
atlas_gcp_project_id: str
```

- *Type:* str

---

##### `atlas_vpc_name`<sup>Required</sup> <a name="atlas_vpc_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.atlasVpcName"></a>

```python
atlas_vpc_name: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `azure_directory_id`<sup>Required</sup> <a name="azure_directory_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureDirectoryId"></a>

```python
azure_directory_id: str
```

- *Type:* str

---

##### `azure_subscription_id`<sup>Required</sup> <a name="azure_subscription_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `route_table_cidr_block`<sup>Required</sup> <a name="route_table_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.routeTableCidrBlock"></a>

```python
route_table_cidr_block: str
```

- *Type:* str

---

##### `vnet_name`<sup>Required</sup> <a name="vnet_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vnetName"></a>

```python
vnet_name: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPeeringConfig <a name="NetworkPeeringConfig" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import network_peering

networkPeering.NetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_id: str,
  project_id: str,
  provider_name: str,
  accepter_region_name: str = None,
  atlas_cidr_block: str = None,
  atlas_gcp_project_id: str = None,
  atlas_vpc_name: str = None,
  aws_account_id: str = None,
  azure_directory_id: str = None,
  azure_subscription_id: str = None,
  gcp_project_id: str = None,
  id: str = None,
  network_name: str = None,
  resource_group_name: str = None,
  route_table_cidr_block: str = None,
  vnet_name: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId">container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#container_id NetworkPeering#container_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#project_id NetworkPeering#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#provider_name NetworkPeering#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName">accepter_region_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock">atlas_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId">atlas_gcp_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName">atlas_vpc_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId">azure_directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#id NetworkPeering#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName">network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#network_name NetworkPeering#network_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock">route_table_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName">vnet_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.containerId"></a>

```python
container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#container_id NetworkPeering#container_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#project_id NetworkPeering#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#provider_name NetworkPeering#provider_name}.

---

##### `accepter_region_name`<sup>Optional</sup> <a name="accepter_region_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.accepterRegionName"></a>

```python
accepter_region_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}.

---

##### `atlas_cidr_block`<sup>Optional</sup> <a name="atlas_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasCidrBlock"></a>

```python
atlas_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}.

---

##### `atlas_gcp_project_id`<sup>Optional</sup> <a name="atlas_gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasGcpProjectId"></a>

```python
atlas_gcp_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}.

---

##### `atlas_vpc_name`<sup>Optional</sup> <a name="atlas_vpc_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.atlasVpcName"></a>

```python
atlas_vpc_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}.

---

##### `azure_directory_id`<sup>Optional</sup> <a name="azure_directory_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureDirectoryId"></a>

```python
azure_directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}.

---

##### `azure_subscription_id`<sup>Optional</sup> <a name="azure_subscription_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}.

---

##### `gcp_project_id`<sup>Optional</sup> <a name="gcp_project_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#id NetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#network_name NetworkPeering#network_name}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}.

---

##### `route_table_cidr_block`<sup>Optional</sup> <a name="route_table_cidr_block" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.routeTableCidrBlock"></a>

```python
route_table_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}.

---

##### `vnet_name`<sup>Optional</sup> <a name="vnet_name" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vnetName"></a>

```python
vnet_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-mongodbatlas.networkPeering.NetworkPeeringConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.3/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}.

---



