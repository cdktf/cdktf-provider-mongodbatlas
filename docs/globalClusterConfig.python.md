# `mongodbatlas_global_cluster_config`

Refer to the Terraform Registory for docs: [`mongodbatlas_global_cluster_config`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config).

# `globalClusterConfig` Submodule <a name="`globalClusterConfig` Submodule" id="@cdktf/provider-mongodbatlas.globalClusterConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalClusterConfig <a name="GlobalClusterConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config mongodbatlas_global_cluster_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  custom_zone_mappings: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]] = None,
  id: str = None,
  managed_namespaces: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.customZoneMappings">custom_zone_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]</code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.managedNamespaces">managed_namespaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]</code> | managed_namespaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `custom_zone_mappings`<sup>Optional</sup> <a name="custom_zone_mappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.customZoneMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_namespaces`<sup>Optional</sup> <a name="managed_namespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.Initializer.parameter.managedNamespaces"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings">put_custom_zone_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces">put_managed_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings">reset_custom_zone_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces">reset_managed_namespaces</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_custom_zone_mappings` <a name="put_custom_zone_mappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings"></a>

```python
def put_custom_zone_mappings(
  value: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putCustomZoneMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]

---

##### `put_managed_namespaces` <a name="put_managed_namespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces"></a>

```python
def put_managed_namespaces(
  value: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.putManagedNamespaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]

---

##### `reset_custom_zone_mappings` <a name="reset_custom_zone_mappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetCustomZoneMappings"></a>

```python
def reset_custom_zone_mappings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_namespaces` <a name="reset_managed_namespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.resetManagedNamespaces"></a>

```python
def reset_managed_namespaces() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GlobalClusterConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlobalClusterConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlobalClusterConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalClusterConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping">custom_zone_mapping</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings">custom_zone_mappings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces">managed_namespaces</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput">custom_zone_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput">managed_namespaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_zone_mapping`<sup>Required</sup> <a name="custom_zone_mapping" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMapping"></a>

```python
custom_zone_mapping: StringMap
```

- *Type:* cdktf.StringMap

---

##### `custom_zone_mappings`<sup>Required</sup> <a name="custom_zone_mappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappings"></a>

```python
custom_zone_mappings: GlobalClusterConfigCustomZoneMappingsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList">GlobalClusterConfigCustomZoneMappingsList</a>

---

##### `managed_namespaces`<sup>Required</sup> <a name="managed_namespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespaces"></a>

```python
managed_namespaces: GlobalClusterConfigManagedNamespacesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList">GlobalClusterConfigManagedNamespacesList</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `custom_zone_mappings_input`<sup>Optional</sup> <a name="custom_zone_mappings_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.customZoneMappingsInput"></a>

```python
custom_zone_mappings_input: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_namespaces_input`<sup>Optional</sup> <a name="managed_namespaces_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.managedNamespacesInput"></a>

```python
managed_namespaces_input: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalClusterConfigConfig <a name="GlobalClusterConfigConfig" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  project_id: str,
  custom_zone_mappings: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]] = None,
  id: str = None,
  managed_namespaces: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings">custom_zone_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]</code> | custom_zone_mappings block. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces">managed_namespaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]</code> | managed_namespaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#cluster_name GlobalClusterConfig#cluster_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#project_id GlobalClusterConfig#project_id}.

---

##### `custom_zone_mappings`<sup>Optional</sup> <a name="custom_zone_mappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.customZoneMappings"></a>

```python
custom_zone_mappings: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]

custom_zone_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#custom_zone_mappings GlobalClusterConfig#custom_zone_mappings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#id GlobalClusterConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_namespaces`<sup>Optional</sup> <a name="managed_namespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigConfig.property.managedNamespaces"></a>

```python
managed_namespaces: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]

managed_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#managed_namespaces GlobalClusterConfig#managed_namespaces}

---

### GlobalClusterConfigCustomZoneMappings <a name="GlobalClusterConfigCustomZoneMappings" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigCustomZoneMappings(
  location: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#location GlobalClusterConfig#location}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#zone GlobalClusterConfig#zone}.

---

### GlobalClusterConfigManagedNamespaces <a name="GlobalClusterConfigManagedNamespaces" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigManagedNamespaces(
  collection: str,
  custom_shard_key: str,
  db: str,
  is_custom_shard_key_hashed: typing.Union[bool, IResolvable] = None,
  is_shard_key_unique: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection">collection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey">custom_shard_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db">db</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed">is_custom_shard_key_hashed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique">is_shard_key_unique</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}. |

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.collection"></a>

```python
collection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#collection GlobalClusterConfig#collection}.

---

##### `custom_shard_key`<sup>Required</sup> <a name="custom_shard_key" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.customShardKey"></a>

```python
custom_shard_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#custom_shard_key GlobalClusterConfig#custom_shard_key}.

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.db"></a>

```python
db: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#db GlobalClusterConfig#db}.

---

##### `is_custom_shard_key_hashed`<sup>Optional</sup> <a name="is_custom_shard_key_hashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isCustomShardKeyHashed"></a>

```python
is_custom_shard_key_hashed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#is_custom_shard_key_hashed GlobalClusterConfig#is_custom_shard_key_hashed}.

---

##### `is_shard_key_unique`<sup>Optional</sup> <a name="is_shard_key_unique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces.property.isShardKeyUnique"></a>

```python
is_shard_key_unique: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/resources/global_cluster_config#is_shard_key_unique GlobalClusterConfig#is_shard_key_unique}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalClusterConfigCustomZoneMappingsList <a name="GlobalClusterConfigCustomZoneMappingsList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalClusterConfigCustomZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalClusterConfigCustomZoneMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]]

---


### GlobalClusterConfigCustomZoneMappingsOutputReference <a name="GlobalClusterConfigCustomZoneMappingsOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location` <a name="reset_location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlobalClusterConfigCustomZoneMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigCustomZoneMappings">GlobalClusterConfigCustomZoneMappings</a>]

---


### GlobalClusterConfigManagedNamespacesList <a name="GlobalClusterConfigManagedNamespacesList" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigManagedNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalClusterConfigManagedNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalClusterConfigManagedNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]]

---


### GlobalClusterConfigManagedNamespacesOutputReference <a name="GlobalClusterConfigManagedNamespacesOutputReference" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import global_cluster_config

globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed">reset_is_custom_shard_key_hashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique">reset_is_shard_key_unique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_custom_shard_key_hashed` <a name="reset_is_custom_shard_key_hashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsCustomShardKeyHashed"></a>

```python
def reset_is_custom_shard_key_hashed() -> None
```

##### `reset_is_shard_key_unique` <a name="reset_is_shard_key_unique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.resetIsShardKeyUnique"></a>

```python
def reset_is_shard_key_unique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput">collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput">custom_shard_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput">db_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput">is_custom_shard_key_hashed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput">is_shard_key_unique_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey">custom_shard_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db">db</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed">is_custom_shard_key_hashed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique">is_shard_key_unique</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_input`<sup>Optional</sup> <a name="collection_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collectionInput"></a>

```python
collection_input: str
```

- *Type:* str

---

##### `custom_shard_key_input`<sup>Optional</sup> <a name="custom_shard_key_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKeyInput"></a>

```python
custom_shard_key_input: str
```

- *Type:* str

---

##### `db_input`<sup>Optional</sup> <a name="db_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.dbInput"></a>

```python
db_input: str
```

- *Type:* str

---

##### `is_custom_shard_key_hashed_input`<sup>Optional</sup> <a name="is_custom_shard_key_hashed_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashedInput"></a>

```python
is_custom_shard_key_hashed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shard_key_unique_input`<sup>Optional</sup> <a name="is_shard_key_unique_input" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUniqueInput"></a>

```python
is_shard_key_unique_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `custom_shard_key`<sup>Required</sup> <a name="custom_shard_key" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.customShardKey"></a>

```python
custom_shard_key: str
```

- *Type:* str

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.db"></a>

```python
db: str
```

- *Type:* str

---

##### `is_custom_shard_key_hashed`<sup>Required</sup> <a name="is_custom_shard_key_hashed" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isCustomShardKeyHashed"></a>

```python
is_custom_shard_key_hashed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_shard_key_unique`<sup>Required</sup> <a name="is_shard_key_unique" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.isShardKeyUnique"></a>

```python
is_shard_key_unique: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlobalClusterConfigManagedNamespaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.globalClusterConfig.GlobalClusterConfigManagedNamespaces">GlobalClusterConfigManagedNamespaces</a>]

---



